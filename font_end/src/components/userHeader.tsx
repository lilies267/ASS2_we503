import { useLocalStorage } from "../hooks";

const UserHeader = () => {
  const [user, setUser] = useLocalStorage("user", null);
  return (
    <header className="bg-gray-300 mx-auto flex items-center">
      <div className="container mx-auto flex items-center gap-4">
        <img className="w-[150px]" src="/images/logoly2.png" alt="" />
        <input
          type="search"
          className="relative m-0  flex-auto rounded-lg border  px-3 py-1.5 text-base font-normal text-black "
          placeholder="Tìm kiếm"
          aria-label="Search"
        />
      </div>
    </header>
  );
};

export default UserHeader;
