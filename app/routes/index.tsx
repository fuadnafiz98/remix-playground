import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function Index() {
  return (
    <div>
      <h4 id="demo">Basic, Fixed List Combobox</h4>
      <Combobox aria-labelledby="demo">
        <ComboboxInput />
        <ComboboxPopover>
          <ComboboxList className="bg-gray-200 space-y-2">
            <ComboboxOption value="Apple" className="hover:bg-purple-600" />
            <ComboboxOption value="Banana" />
            <ComboboxOption value="Orange" />
            <ComboboxOption value="Pineapple" />
            <ComboboxOption value="Kiwi" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
