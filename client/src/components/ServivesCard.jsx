
const ServivesCard = ({color, title, icon, subtitle}) => (
    <div className="flex sm:flex-col md:flex-row justify-between items-center w-full p-3 m-2 cursor-pointer hover:shadow-xl">
    
        <div className={`w-64`}> 
        <img src={icon} alt="" />
           
        </div>
        
        <div className="ml-5 flex-col flex-1 text-white">
            <h3 className="mt-2  text-lg font-bold">{title}</h3>
            <p className="w-96 mt-2  text-sm">{subtitle}</p>
        </div>
     

    </div>
)
  

export default ServivesCard