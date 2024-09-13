import Input from "../../elements/Input";
import Label from "../../elements/Label";

export default function InputGroup({ name, className, onChange, value }) {
    return (
        <div className={`${className} flex flex-col gap-2`}>
            <Label htmlFor={name} className="capitalize">{name}</Label>
            <Input id={name} name={name} className="" onChange={onChange} value={value}/>
        </div>
    );
}