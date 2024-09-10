/*

preciso poder coletar e enviar os dados aqui armazenados

*/

interface inProps{
    description: string;
    placeholder: string;
    bgColor?: string;
    placeholderColor?: string;
};

export default function InputData({description, placeholder, bgColor} : inProps){
    return (
        <div className="flex flex-col items-start ">
            <p className={``}>{description}</p>
            <input type="text" placeholder={placeholder} className={`bg-[${bgColor}]`}/>
        </div>

    )

}

//export default inputData;