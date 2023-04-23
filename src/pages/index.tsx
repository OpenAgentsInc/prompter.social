import { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import useStore, { Shape } from '@/store'

const Home: NextPage = () => {
  const shapes = useStore((state) => state.shapes);
  const insertRectangle = useStore((state) => state.insertRectangle);
  const others = useStore((state) => state.liveblocks.others);
  const selectedShape = useStore((state) => state.selectedShape);
  const deleteShape = useStore((state) => state.deleteShape);
  const enterRoom = useStore((state) => state.liveblocks.enterRoom);
  const leaveRoom = useStore((state) => state.liveblocks.leaveRoom);
  const isLoading = useStore((state) => state.liveblocks.isStorageLoading);
  const onCanvasPointerMove = useStore((state) => state.onCanvasPointerMove);
  const onCanvasPointerUp = useStore((state) => state.onCanvasPointerUp);

  useEffect(() => {
    enterRoom("room-no");
    return () => {
      leaveRoom("room-no");
    };
  }, [enterRoom, leaveRoom]);

  return (
    <>
      <Head>
        <title>Prompter</title>
        <meta name="description" content="AGI house hackathon entry" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          {!isLoading && (
            <>
              <div className="toolbar">
                <button onClick={insertRectangle}>Add Shape</button>
                <button onClick={deleteShape} disabled={selectedShape === null}>
                  Delete
                </button>
              </div>
              <div
                className="canvas"
                onPointerMove={onCanvasPointerMove}
                onPointerUp={onCanvasPointerUp}
              >
                {Object.entries(shapes).map(([shapeId, shape]) => {
                  let selectionColor = "transparent";

                  if (selectedShape === shapeId) {
                    selectionColor = "blue";
                  } else if (
                    others.some(
                      (user) => user.presence?.selectedShape === shapeId
                    )
                  ) {
                    selectionColor = "green";
                  }

                  return (
                    <Rectangle
                      key={shapeId}
                      id={shapeId}
                      shape={shape}
                      selectionColor={selectionColor}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;

const Rectangle = (props: {
  id: string;
  shape: Shape;
  selectionColor: string;
}) => {
  const { id, shape, selectionColor } = props;
  const onShapePointerDown = useStore((state) => state.onShapePointerDown);

  return (
    <div
      className="rectangle"
      style={{
        transform: `translate(${shape.x}px, ${shape.y}px)`,
        backgroundColor: shape.fill ? shape.fill : "#CCC",
        borderColor: selectionColor,
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        onShapePointerDown(id);
      }}
    ></div>
  );
};
