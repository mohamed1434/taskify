import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64f4df698b9f2e420daa",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
