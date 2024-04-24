// Interface for useFetchInfo, SearchCards
export interface KPInfo {
  id: string;
  title: string;
  description: string;
  datePublished: Date;
  author: string;
  fileType: string;
  kpType: string;
  downloadURL: string;
}

  export interface DocID {
    docId?: string;
  }

  export interface SearchTitle {
    searchTitle?: string;
  }

  export interface FormProps {
    kpId: string;
    kpTitle: string;
    downloadURl: string;
    onCloseForm: () => void;
  }