// eslint-disable-next-line react-refresh/only-export-components
const DummyContent = ({
  text,
}: {
  text: { title: string; description: string; image: string };
}) => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-foreground p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-background/70 text-base md:text-2xl font-sans mx-auto">
              <span className="font-bold text-background">{text.title}</span>{" "}
              {text.description}
            </p>
            <img
              src={text.image}
              alt="Cricket news image"
              height="500"
              width="500"
              className="mt-10 h-full w-full mx-auto object-contain rounded-3xl"
            />
          </div>
        );
      })}
    </>
  );
};

export const data = [
  {
    category: "Cricket",
    title: "Falcon Premier League Set to Begin",
    src: "https://images.unsplash.com/photo-1693517413656-d3445182b2e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text={{
          title: "The Falcon Premier League Kicks Off in Style!",
          description:
            "With new teams like the Grey Dragons and Mystic Titans, this season promises exciting cricket and fierce rivalries. Will the Silver Hawks defend their title?",
          image:
            "https://images.unsplash.com/photo-1693517413656-d3445182b2e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    ),
  },
  {
    category: "Cricket",
    title: "Nimbus Cup Finals: A Historic Clash",
    src: "https://images.unsplash.com/photo-1693517382976-20ef824a9c7c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text={{
          title: "Spectacular Showdown at the Nimbus Cup Finals!",
          description:
            "The Storm Warriors and the Thunder Eagles face off in a match for the ages, with the Nimbus Trophy on the line. Will the underdogs prevail?",
          image:
            "https://images.unsplash.com/photo-1693517382976-20ef824a9c7c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    ),
  },
  {
    category: "Tournaments",
    title: "Skyreach Invitational: The Battle for Supremacy",
    src: "https://images.unsplash.com/photo-1568290925324-9d30cded4223?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text={{
          title: "Who Will Win the Skyreach Invitational?",
          description:
            "With teams from all over the world, the Skyreach Invitational brings top talent to compete for the ultimate cricket crown.",
          image:
            "https://images.unsplash.com/photo-1568290925324-9d30cded4223?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    ),
  },

  {
    category: "Players",
    title: "Zorak Allard: The Unstoppable Force",
    src: "https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text={{
          title: "Zorak Allard’s Streak Continues!",
          description:
            "With 10 centuries in 12 matches, Zorak Allard is rewriting the record books. Fans can't wait to see what he’ll do next!",
          image:
            "https://images.unsplash.com/photo-1599982946086-eb42d9e14eb8?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    ),
  },

  {
    category: "Tournaments",
    title: "Crystal Cup: Shattering Expectations",
    src: "https://plus.unsplash.com/premium_photo-1677405099651-53669fdee9df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text={{
          title: "Who Will Claim the Crystal Cup?",
          description:
            "This year’s Crystal Cup brings together the best of the best, with exciting twists and surprise entries that will keep fans on the edge of their seats.",
          image:
            "https://plus.unsplash.com/premium_photo-1677405099651-53669fdee9df?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    ),
  },

  {
    category: "Players",
    title: "Introducing Callis Devroux: The New All-Rounder",
    src: "https://images.unsplash.com/photo-1593766787879-e8c78e09cbbe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: (
      <DummyContent
        text={{
          title: "Callis Devroux: The Rising Star of Cricket",
          description:
            "Hailing from the coastal city of Veldria, Callis Devroux has quickly made a name for himself as an all-rounder with incredible potential. Fans are excited to see his journey unfold.",
          image:
            "https://images.unsplash.com/photo-1593766787879-e8c78e09cbbe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      />
    ),
  },
];
