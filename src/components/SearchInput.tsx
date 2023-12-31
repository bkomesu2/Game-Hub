import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Prop {
  onSearch: (serachText: string) => void;
}

const SearchInput = ({ onSearch }: Prop) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={"Search Games..."}
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
