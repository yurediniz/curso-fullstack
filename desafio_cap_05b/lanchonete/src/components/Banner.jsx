import jelanches_logo from "../assets/jelanches_logo.png"

const Banner = () => {
  return (
    <div>
        <img 
            src={jelanches_logo}
            alt="Logo Jelanche`s"
            width={160}
            height={160}
        />
        <img 
            src="jelanches_banner.png" 
            alt="Banner JeLanche`s"
            width={400}
            height={160}
        />
    </div>
  )
}

export default Banner