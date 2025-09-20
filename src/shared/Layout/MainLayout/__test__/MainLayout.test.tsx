import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import MainLayout from "./../MainLayout";
import { ModuleRoutes } from "../../../../app/routes";

// mockeamos el hook useLocalStorage
jest.mock("../../../shared/hooks/useLocalStorage", () => ({
  useLocalStorage: () => ({
    storedValue: { firstName: "Emily" } // simulamos un usuario logueado
  })
}));

describe("MainLayout component", () => {
  it("renderiza el logo con su alt y el link correcto", () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <div>contenido</div>
        </MainLayout>
      </MemoryRouter>
    );

    const logo = screen.getByAltText("logoPlazaVea");
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", `/${ModuleRoutes.Home}`);
  });

  it("renderiza el carrito con su alt y el link correcto", () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <div>contenido</div>
        </MainLayout>
      </MemoryRouter>
    );

    const carrito = screen.getByAltText("miCarrito");
    expect(carrito).toBeInTheDocument();
    expect(carrito.closest("a")).toHaveAttribute("href", `/${ModuleRoutes.Resumen}`);
  });

  it("muestra el saludo dinámico cuando hay usuario en localStorage", () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <div>contenido</div>
        </MainLayout>
      </MemoryRouter>
    );

    expect(screen.getByText(/Hola, Emily/i)).toBeInTheDocument();
  });

  it("renderiza los children correctamente", () => {
    render(
      <MemoryRouter>
        <MainLayout>
          <p>Contenido de prueba</p>
        </MainLayout>
      </MemoryRouter>
    );

    expect(screen.getByText("Contenido de prueba")).toBeInTheDocument();
  });
});