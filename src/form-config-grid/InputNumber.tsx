interface Props {
    label: string,
    name: string,
    value: number,
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputNumber = ({label, name, value, onChange}: Props) => {
    return (
        <div className="container-input">
            <label>{label}</label>
            <input
                type="number"
                min={1}
                max={100}
                step={1}
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}
