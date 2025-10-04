-- Tabla Departamentos
CREATE TABLE Departamentos (
    id_departamento INT PRIMARY KEY,
    nombre_departamento VARCHAR(50) NOT NULL
);

-- Tabla Empleados
CREATE TABLE Empleados (
    id_empleado INT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    id_departamento INT,
    salario DECIMAL(10,2),
    activo BIT,
    FOREIGN KEY (id_departamento) REFERENCES Departamentos(id_departamento)
);

-- Tabla Proyectos
CREATE TABLE Proyectos (
    id_proyecto INT PRIMARY KEY,
    nombre_proyecto VARCHAR(100) NOT NULL,
    id_departamento INT,
    FOREIGN KEY (id_departamento) REFERENCES Departamentos(id_departamento)
);


-- Departamentos
INSERT INTO Departamentos VALUES 
(1, 'Tecnología'),
(2, 'Marketing'),
(3, 'Ventas');

-- Empleados
INSERT INTO Empleados VALUES
(1, 'Juan', 'Martínez', 1, 1200.00, 1),
(2, 'Ana', 'Morales', 1, 950.00, 1),
(3, 'Luis', 'Pérez', 2, 850.00, 1),
(4, 'María', 'Gómez', 2, 780.00, 0),
(5, 'Carlos', 'Mendoza', 3, 1100.00, 1),
(6, 'Sofía', 'Muñoz', 3, 1300.00, 1);

-- Proyectos
INSERT INTO Proyectos VALUES
(1, 'Sistema ERP', 1),
(2, 'Página Web Corporativa', 1),
(3, 'Campaña Redes Sociales', 2),
(4, 'Publicidad Televisiva', 2),
(5, 'Plan de Ventas 2025', 3),
(6, 'Expansión Internacional', 3);



update Empleados set salario = salario * 1.10 
where activo = 1
select* from Empleados
where activo = 1

DELETE FROM Empleados
WHERE salario < 800.00;

SELECT 
    CONCAT(e.nombre, ' ', e.apellido) AS NombreCompleto,
    e.salario,
    d.nombre_departamento
FROM Empleados e
INNER JOIN Departamentos d
    ON e.id_departamento = d.id_departamento;



	CREATE INDEX idx_salario
ON Empleados(salario);


select * from Empleados


CREATE VIEW Empleados as
SELECT e.*
FROM Empleados e
INNER JOIN Departamentos d
ON e.id_departamento = d.id_departamento
WHERE e.activo = 1
AND d.nombre_departamento = 'Ventas';


SELECT COUNT(*) AS TotalProyectosMarketing
FROM Proyectos p
INNER JOIN Departamentos d
    ON p.id_departamento = d.id_departamento
WHERE d.nombre_departamento = 'Marketing';



SELECT * FROM Empleados
WHERE apellido LIKE 'M%';

select * from Empleados

select* from Proyectos




















