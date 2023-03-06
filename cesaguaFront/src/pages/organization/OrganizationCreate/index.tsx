import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { object, string, ObjectSchema } from "yup";
import classNames from "classnames";
import { useRef } from "react";
import "./index.css";
import { CompressorImage } from "../../../utils/Compressor";

const OrganizationCreate = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  let files = null;

  interface RegisterData {
    name: string;
    lastname: string;
    phone: string;
    email: string;
    position: string;
  }

  const initialData: RegisterData = {
    name: "",
    lastname: "",
    phone: "",
    email: "",
    position: "",
  };

  const [data, setDataRegister] = useState<RegisterData>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  let schema: ObjectSchema<any> = object().shape({
    name: string()
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras")
      .required("Este campo es requerido"),
    lastname: string()
      .matches(/^[a-zA-Z]+$/, "Solo se admiten letras")
      .required("Este campo es requerido"),
    phone: string()
      .matches(/^[1-9]\d*$/, "No debe iniciar con 0")
      .min(8, "Solo se permiten 8 dígitos")
      .max(8, "Solo se permiten 8 dígitos")
      .matches(/^-?\d+$/, "Solo se admiten numeros")
      .required("Este campo es requerido")
      .transform((value) => value.replace(/[^\d]/g, "")),
    email: string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Formato de correo invalido"
      )
      .required("Este campo es requerido"),
    position: string().required("Este campo es requerido"),
  });

  const handleChange = (event: any) => {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setDataRegister({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitHandler = (event: any) => {
    setIsSubmitted(false);
    event.preventDefault();
    console.log(data);
    validateForm();
    setIsSubmitted(true);
  };

  const validateForm = () => {
    schema
      .validate(data, { abortEarly: false })
      .then(() => {
        alert("formulario rellenado");
        // agregar
        console.log(data);
      })
      .catch((errors: any) => {
        let allErrors: { [key: string]: string } = {};
        console.log(JSON.stringify(errors));
        if (Object.keys(errors).length !== 0) {
          errors.inner.map((error: any) => {
            allErrors[error.path] = error.message;
            setErrors(allErrors);
          });
        }
      });
  };

  const getFieldClass = (fieldName: keyof RegisterData) => {
    return classNames({
      "form-control": true,
      "is-invalid": errors[fieldName],
    });
  };

  const openFile = () => {
    const input = inputRef.current;
    if (input) {
      input.click();
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const onFileChange = async (e:any) => {
    files = e.target.files;
    files = files[0];
    if (files !== undefined) {
      if (files.size >= 5242880) {
        // CustomAlert("error", "Solo se permiten archivos de máximo 5Mb");
        files = null;
        return;
      } else {
        if (files.size > 1048576) {
          files = await CompressorImage(files, 0.5);
        }
      }
      let fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.onload = (event) => {
        setSelectedImage(event.target?.result as string);
      };
    }
  };

  return (
    <>
      <div className="container-fluid svg-bg-001">
        <div className="row col-12 p-3 text-center">
          <div className="fs-1 text-white border border-2 rounded ">AGREGAR NUEVO REGISTRO</div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto min-vh-100">
            <form onSubmit={submitHandler} className=" needs-validation">
              <div className="mb-4 d-flex justify-content-center ">
                <div className="card">
                  <div
                    className={`remove-image ${
                      selectedImage && "remove-image__visible"
                    }`}
                    onClick={clearImage}
                  />
                  <img
                    onClick={openFile}
                    style={{ width: "300px", height: "300px" }}
                    src={
                      selectedImage
                        ? selectedImage
                        : "https://mdbootstrap.com/img/Photos/Others/placeholder.webp"
                    }
                    className="img-thumbnail d-block image-container-or"
                    alt="example placeholder"
                  />

                  <div className="card-footer">
                    Haga click para seleccionar una imagen
                  </div>
                </div>
              </div>

              <input
                onChange={onFileChange}
                type="file"
                name="image"
                hidden
                id="image"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                ref={inputRef}
              />

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className={getFieldClass("name")}
                  name="name"
                  value={data.name || ""}
                  onChange={handleChange}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <small className="text-danger">
                  <strong>{errors.name}</strong>
                </small>
                <label htmlFor="floatingInput">Nombre</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  className={getFieldClass("lastname")}
                  name="lastname"
                  value={data.lastname || ""}
                  onChange={handleChange}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <small className="text-danger">
                  <strong>{errors.lastname}</strong>
                </small>
                <label htmlFor="floatingInput">Apellido</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  className={getFieldClass("phone")}
                  name="phone"
                  value={data.phone || ""}
                  onChange={handleChange}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <small className="text-danger">
                  <strong>{errors.phone}</strong>
                </small>
                <label htmlFor="floatingInput">Teléfono de Contacto</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  className={getFieldClass("email")}
                  name="email"
                  value={data.email || ""}
                  onChange={handleChange}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <small className="text-danger">
                  <strong>{errors.email}</strong>
                </small>
                <label htmlFor="floatingInput">Correo de Contacto</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  className={
                    errors.position ? "form-control is-invalid" : "form-control"
                  }
                  name="position"
                  value={data.position || ""}
                  onChange={handleChange}
                  id="floatingSelect"
                  aria-label="Floating label select example">
                  <option disabled selected value="">
                    Posición
                  </option>
                  <option value="1">puesto 1</option>
                  <option value="2">puesto 2</option>
                  <option value="3">puesto 3</option>
                </select>
                <small className="text-danger">
                  <strong>{errors.position}</strong>
                </small>
                <label htmlFor="floatingSelect">Seleccione una opción</label>
              </div>

              <div className=" container d-flex gap-2">
                <button
                  className="text-center col-6 btn btn-save btn-lg flex-column"
                  type="submit">
                  Aceptar
                </button>
                <button
                  className="text-center col-6 btn btn-cancel btn-lg flex-column"
                  type="button">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationCreate;
