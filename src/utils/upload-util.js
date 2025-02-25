import axios from "axios";

export const uploadFile = async (file) => {
    const formData = new FormData();
      console.log({ file })
      formData.append('file', {
          uri: file.uri,
          name: file.fileName || file.name,
          type: file.type,
      });
  
    try {
      const response = await axios.post('http://65.2.116.173:8080/api/uploadFile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload Success:', response.data);
      return { s: true, url: response.data?.fileUrl };
    } catch (error) {
      console.log('Upload Error:', error);
        return { s: false, error }
    }
  };