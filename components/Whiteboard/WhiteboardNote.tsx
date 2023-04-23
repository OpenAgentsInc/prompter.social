import clsx from 'clsx'
import {
    ChangeEventHandler, ComponentProps, FocusEventHandler, KeyboardEvent, memo,
    PointerEventHandler, useCallback, useRef
} from 'react'
import { OpenAIModels } from '@/types/openai'
import { CrossIcon } from '../../icons'
import { useStorage } from '../../liveblocks.config'
import { Avatar } from '../../primitives/Avatar'
import { Button } from '../../primitives/Button'
import styles from './WhiteboardNote.module.css'

interface Props
  extends Omit<
    ComponentProps<"div">,
    "id" | "onBlur" | "onChange" | "onFocus"
  > {
  dragged: boolean;
  id: string;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onDelete: () => void;
  onFocus: FocusEventHandler<HTMLTextAreaElement>;
  onPointerDown: PointerEventHandler<HTMLDivElement>;
}

export const WhiteboardNote = memo(
  ({
    id,
    dragged,
    onPointerDown,
    onDelete,
    onChange,
    onFocus,
    onBlur,
    style,
    className,
    ...props
  }: Props) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const note = useStorage((root) => root.notes.get(id));

    const handleDoubleClick = useCallback(() => {
      textAreaRef.current?.focus();
    }, []);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Escape") {
          textAreaRef.current?.blur();
        }

        if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
          event.preventDefault(); // Prevent creating a new line in the textarea
          const text = textAreaRef.current?.value;
          console.log("Submitting...", text);

          const submitChat = async () => {
            const messageData = {
              model: OpenAIModels["gpt-4"],
              messages: [
                {
                  role: "user",
                  content: "Does this work?",
                },
              ],
              key: "your_key",
              prompt: "hello test",
              temperature: 0.7,
            };

            const response = await fetch("/api/chat", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(messageData),
            });

            if (response.ok) {
              console.log("Chat submitted successfully");
              const data = response.body;
              if (!data) {
                console.log("No data...!");
                return;
              }
              const reader = data.getReader();
              const decoder = new TextDecoder();
              let done = false;
              let isFirst = true;
              let text = "";
              // const data = await response.body()
              // const data = await response.json();
              // console.log(data);
            } else {
              console.error("Error submitting chat:", response.statusText);
            }
          };

          submitChat();
        }
      },
      []
    );

    if (!note) {
      return null;
    }

    const { x, y, text, selectedBy } = note;

    return (
      <div
        className={clsx(className, styles.container)}
        data-note={id}
        onDoubleClick={handleDoubleClick}
        onPointerDown={onPointerDown}
        style={{
          transform: `translate(${x}px, ${y}px)`,
          transition: dragged ? "none" : undefined,
          zIndex: dragged ? 1 : 0,
          cursor: dragged ? "grabbing" : "grab",
          ...style,
        }}
        {...props}
      >
        <div className={styles.note}>
          <div className={styles.header}>
            <Button
              className={styles.deleteButton}
              icon={<CrossIcon />}
              onClick={onDelete}
              variant="subtle"
            />
            <div className={styles.presence}>
              {selectedBy ? (
                <Avatar
                  color={selectedBy.color}
                  name={selectedBy.name}
                  outline
                  src={selectedBy.avatar}
                />
              ) : null}
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textAreaSize}>{text + " "}</div>
            <textarea
              className={styles.textArea}
              onBlur={onBlur}
              onChange={onChange}
              onFocus={onFocus}
              onKeyDown={handleKeyDown}
              onPointerDown={(e) => e.stopPropagation()}
              placeholder="Write note…"
              ref={textAreaRef}
              value={text}
            />
          </div>
        </div>
      </div>
    );
  }
);
