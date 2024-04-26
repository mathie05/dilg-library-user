export interface KPInfo {
  id: string;
  title: string;
  description: string;
  datePublished: string;
  author: string;
  fileType: string;
  kpType: string;
  timeUploaded: string;
  coverURL: string;
  kpURL: string;
  coverName: string;
  kpName: string;
}

  export interface DocID {
    docId?: string;
  }

  export interface SearchTitle {
    searchTitle?: string;
  }

  export interface FormProps {
    kpID: string;
    kpTitle: string;
    downloadURL: string;
    onCloseForm: () => void;
  }