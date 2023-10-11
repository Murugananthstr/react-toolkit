import { FieldValues, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IAddStockApp, SET_DATA } from "./slice/newRequestsSlice";
import { IAddStocksForm } from "./types";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be atleast 3 characters" })
    .max(50, { message: "This name cannot exceed more than 50 characters" }),
  symbol: z
    .string()
    .min(3, { message: "Symbol must be atleast 3 characters" })
    .max(10, { message: "This Symbol cannot exceed more than 10 characters" }),
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 characters" })
    .max(200, {
      message: "This Description cannot exceed more than 200 characters",
    }),
  country: z
    .string()
    .min(3, { message: "Country must be atleast 3 characters" })
    .max(25, {
      message: "Country cannot exceed more than 25 characters",
    }),
});

type FormData = z.infer<typeof schema>;

const AddStocks: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentRequest: IAddStockApp = useAppSelector(
    (state) => state.allRequest.stock.currentRequest
  );
  const { data } = currentRequest;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    const payloadData: IAddStocksForm = {
      id: new Date().getTime().toString(),
      name: data.name,
      symbol: data.symbol,
      description: data.description,
      country: data.country,
    };
    if (payloadData) {
      dispatch(SET_DATA(payloadData));
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="from-label">
          Name :
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="symbol" className="for-label">
          Symbol :
        </label>
        <input
          id="symbol"
          type="text"
          {...register("symbol")}
          className="form-control"
        />
        {errors.symbol && (
          <p className="text-danger">{errors.symbol.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="for-label">
          Description :
        </label>
        <input
          id="description"
          type="text"
          {...register("description")}
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="for-label">
          Country :
        </label>
        <input
          id="country"
          type="text"
          {...register("country")}
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={
          (errors.name ||
            errors.symbol ||
            errors.description ||
            errors.country) &&
          !isValid
        }
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
};

export default AddStocks;
