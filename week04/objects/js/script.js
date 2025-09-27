// 1. Definir objeto del curso
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Enrique Guardado" },
        { section: "002", enrolled: 80, instructor: "Sander Guardado" }
    ]
};

// 2. Función para mostrar el nombre del curso
function setCourseInformation(course) {
    document.querySelector("#courseName").textContent = `${course.code} – ${course.title}`;
}

// 3. Función para crear filas de tabla
function sectionTemplate(section) {
    return `
    <tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
}

// 4. Función para renderizar secciones en la tabla
function renderSections(course) {
    const html = course.sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
}

// 5. Ejecutar funciones
setCourseInformation(aCourse);
renderSections(aCourse);
