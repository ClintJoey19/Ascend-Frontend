declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (config: any, callback: any) => any;
      // Add other Cloudinary functions you use
    };
  }
}
