/*

preciso poder coletar e enviar os dados aqui armazenados

*/

interface inProps{
    description: string;
    placeholder: string;
};

export default function InputData({description, placeholder} : inProps){
    return (
        <div className="flex items-start ">
            <p>{description}</p>
            <input type="text" placeholder={placeholder}/>
        </div>

    )

}

//export default inputData;