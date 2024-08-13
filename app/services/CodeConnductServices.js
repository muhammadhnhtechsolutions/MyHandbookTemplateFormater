import { axiosInstance } from "../Utils/httpAxios";

export const CodeConnductServices = async (data) => {
  const pdfid = localStorage.getItem("ids");

  const values = {
    pdf_id:pdfid,
  statement_one: data[0] === undefined ? "" : data[0],
    statement_two: data[1] === undefined ? "" : data[1],
    statement_three: data[2] === undefined ? "" : data[2],
    statement_four: data[3] === undefined ? "" : data[3],
    statement_five: data[4] === undefined ? "" : data[4],
    statement_six: data[5] === undefined ? "" : data[5],
    statement_seven: data[6] === undefined ? "" : data[6],
    statement_eight: data[7] === undefined ? "" : data[7],
    statement_nine: data[8] === undefined ? "" : data[8],
    statement_eleven: data[9] === undefined ? "" : data[9],
    statement_twelve: data[10] === undefined ? "" : data[10],
    statement_ten: data[11] === undefined ? "" : data[11],
    statement_thirteen: data[12] === undefined ? "" : data[12],
  };

  return await axiosInstance
    .post("/pdf/code_of_conduct/add_values/", values)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
export const FamilyConductService = async () => {
  const pdfid = localStorage.getItem("ids");

  try {
    const response = await axiosInstance.get(
      `/pdf/code_of_conduct/get_values/?pdf_id=${pdfid}`
    );
   
    return response.data;
  } catch (err) {
   
    return err.response.data;
  }
};
