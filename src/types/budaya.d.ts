interface BudayaI {
  attributes: {
    nama: string;
    foto: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
    deskripsi: string;
  };
}
