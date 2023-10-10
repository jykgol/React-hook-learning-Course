import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.quarry}
        onChange={e => { setFilter({ ...filter, quarry: e.target.value }) }}
        placeholder="Поиск"
      />

      <MySelect
        value={filter.sort}
        setValue={selectedSort => { setFilter({ ...filter, sort: selectedSort }) }}
        defaultValue="Сортировка по"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]} />
    </div>
  );
}

export default PostFilter;
