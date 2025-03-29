import Bounded from "@/components/bounded";
import ContentList from "@/components/content-list";

const MyWorkPage = () => {
  return (
    <Bounded>
      <ContentList />

      <p className="text-slate-100 text-xl mt-8">
        These items only depict a very small part of what I have done in my
        past. Feel free to contact me for even more references :)
      </p>
    </Bounded>
  );
};

export default MyWorkPage;
