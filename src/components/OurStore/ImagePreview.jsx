import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const ImagePreview = ({ hide, img, OpenImg }) => {
  useEffect(() => {
    if (OpenImg) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [OpenImg]);
  return (
    <div
      className={`w-full h-screen bg-black/90 fixed top-0 left-0 z-[10] ${
        OpenImg ? "visible" : "invisible"
      }`}
    >
      <FontAwesomeIcon
        icon={faX}
        className="absolute md:right-10 right-8 top-8 md:top-10 text-lg text-white cursor-pointer"
        onClick={hide}
      />
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={img}
          className={`md:w-fit md:h-fit h-auto w-[80%] rounded-lg  ${
            OpenImg ? "scale-100 transition-all duration-500" : "scale-0 "
          }`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ImagePreview;
