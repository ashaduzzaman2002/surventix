const CommitmentCard = ({
  item,
}: {
  item: {
    id: number;
    title: string;
    image: string;
    lists: string[];
  };
}) => (
  <div
    key={item.id}
    className="w-full h-[500px] overflow-hidden relative shadow-2xl group"
  >
    <img
      className="h-full w-full absolute inset-0 object-cover duration-300 ease-in-out group-hover:translate-x-full group-hover:translate-y-full group-hover:scale-0 transition-all duration-500"
      src={item.image}
      alt=""
    />

    <div className="absolute bg-gradient-to-br from-[#1C182A]/50 to-[#1C182A]/20 inset-0 "></div>
    <div className="group-hover:bg-[#1C182A] relative h-[30%] transition-all duration-500 ease-in-out">
      <h2 className="p-6 text-3xl">{item.title}</h2>
    </div>

    <div className=" bg-[#1C182A] p-6 pt-0 relative h-[70%] translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out">
      <ul className="text-start flex flex-col gap-2 ">
        {item.lists.map((listItem: string, i: number) => (
          <li key={i}>• {listItem}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default CommitmentCard;
