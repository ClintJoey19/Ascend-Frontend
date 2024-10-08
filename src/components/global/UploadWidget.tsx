import { createContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Upload } from "lucide-react";

type CloudinaryScriptContextProps = {
  loaded: boolean;
};

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext<CloudinaryScriptContextProps>({
  loaded: false,
});

type UploadWidgetProps = {
  uwConfig: {
    cloudName: string;
    uploadPreset: string;
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    multiple: boolean; //restrict upload to a single file
    folder: string; //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    maxImageFileSize: number; //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  };
  setPublicId: React.Dispatch<React.SetStateAction<string>>;
};

function UploadWidget({ uwConfig, setPublicId }: UploadWidgetProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error: any, result: any) => {
          if (!error && result && result.event === "success") {
            setPublicId(result.info.secure_url);
            myWidget.close();
          }
        }
      );

      document.getElementById("upload_widget")?.addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <Button
        id="upload_widget"
        variant="outline"
        size="sm"
        type="button"
        onClick={initializeCloudinaryWidget}
      >
        Upload <Upload className="h-3 w-3 ml-2" />
      </Button>
    </CloudinaryScriptContext.Provider>
  );
}

export default UploadWidget;
export { CloudinaryScriptContext };
