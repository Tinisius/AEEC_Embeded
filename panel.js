function controller() {
  /* ── CSS ─────────────────────────────────────────────────────────── */
  var css = `
    #sbire-panel *, #sbire-profile-panel * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    #sbire-panel { background: #f8f9fa; border-radius: 8px; padding: 16px; max-width: 100%; }

    #sbire-panel .sbire-header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
    #sbire-panel .sbire-title { font-size: 1.1rem; font-weight: 700; color: #212529; margin: 0; }
    #sbire-panel .sbire-foto-badge { font-size: 0.92rem; background: #212529; color: #fff; padding: 5px 14px; border-radius: 20px; letter-spacing: 0.01em; }
    #sbire-panel .sbire-foto-badge strong { color: #ffc107; }

    #sbire-panel .sbire-controls { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px; align-items: center; }
    #sbire-panel .sbire-controls select,
    #sbire-panel .sbire-controls input { font-size: 0.85rem; padding: 5px 10px; border: 1px solid #ced4da; border-radius: 4px; background: #fff; color: #495057; }
    #sbire-panel .sbire-controls input { min-width: 210px; }

    #sbire-panel .sbire-btn { font-size: 0.8rem; padding: 5px 12px; border: none; border-radius: 4px; cursor: pointer; font-weight: 500; transition: background 0.15s; }
    #sbire-panel .sbire-btn:disabled { opacity: 0.42; cursor: not-allowed; }
    #sbire-panel .sbire-btn-primary   { background: #0d6efd; color: #fff; }
    #sbire-panel .sbire-btn-primary:hover:not(:disabled)   { background: #0b5ed7; }
    #sbire-panel .sbire-btn-danger    { background: #dc3545; color: #fff; }
    #sbire-panel .sbire-btn-danger:hover:not(:disabled)    { background: #bb2d3b; }
    #sbire-panel .sbire-btn-success   { background: #198754; color: #fff; }
    #sbire-panel .sbire-btn-success:hover:not(:disabled)   { background: #146c43; }
    #sbire-panel .sbire-btn-secondary { background: #6c757d; color: #fff; }
    #sbire-panel .sbire-btn-secondary:hover:not(:disabled) { background: #5c636a; }
    #sbire-panel .sbire-btn-sm { font-size: 0.75rem; padding: 3px 9px; }

    #sbire-panel .sbire-bulk-bar { display: none; align-items: center; gap: 8px; background: #fff3cd; border: 1px solid #ffc107; border-radius: 4px; padding: 6px 10px; margin-bottom: 8px; font-size: 0.82rem; color: #664d03; }
    #sbire-panel .sbire-bulk-bar.visible { display: flex; }

    #sbire-panel .sbire-table-wrap { overflow-x: auto; }
    #sbire-panel table { width: 100%; border-collapse: collapse; font-size: 0.83rem; }
    #sbire-panel th { background: #e9ecef; color: #495057; font-weight: 600; text-align: left; padding: 7px 10px; white-space: nowrap; border-bottom: 2px solid #dee2e6; }
    #sbire-panel td { padding: 7px 10px; border-bottom: 1px solid #dee2e6; vertical-align: middle; white-space: nowrap; }
    #sbire-panel tr:last-child td { border-bottom: none; }
    #sbire-panel tr:not(.row-abandoned):hover td { background: #eef2ff; cursor: pointer; }
    #sbire-panel tr.row-abandoned td { color: #adb5bd; background: #f8f9fa; }
    #sbire-panel tr.row-abandoned .sbire-nombre { text-decoration: line-through; color: #adb5bd; }
    #sbire-panel tr.row-nodata td { color: #868e96; }

    #sbire-panel .sem-dot { display: inline-block; width: 14px; height: 14px; border-radius: 50%; vertical-align: middle; margin-right: 5px; }
    #sbire-panel .sem-red    { background: #dc3545; }
    #sbire-panel .sem-yellow { background: #ffc107; }
    #sbire-panel .sem-green  { background: #28a745; }
    #sbire-panel .sem-empty  { background: #dee2e6; border: 1px dashed #adb5bd; }

    #sbire-panel .badge { display: inline-block; font-size: 0.7rem; font-weight: 600; padding: 2px 7px; border-radius: 10px; }
    #sbire-panel .badge-abandoned  { background: #dee2e6; color: #495057; }
    #sbire-panel .badge-nocontesto { background: #fff3cd; color: #856404; }
    #sbire-panel .badge-egresado   { background: #cff4fc; color: #055160; }
    #sbire-panel .badge-titulado   { background: #d1e7dd; color: #0f5132; }
    #sbire-panel .badge-activo     { background: #e2e3e5; color: #41464b; }

    #sbire-panel .entrevista-ok     { color: #198754; font-weight: 500; }
    #sbire-panel .entrevista-agenda { color: #0d6efd; }
    #sbire-panel .entrevista-none   { color: #adb5bd; }

    #sbire-panel .sbire-nombre { color: #0d6efd; font-weight: 500; }
    #sbire-panel .sbire-footer { margin-top: 8px; font-size: 0.78rem; color: #6c757d; }

    /* Perfil */
    #sbire-profile-panel { display: none; margin-top: 18px; background: #fff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; }
    #sbire-profile-panel.visible { display: block; }
    #sbire-profile-panel .profile-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; gap: 12px; flex-wrap: wrap; }
    #sbire-profile-panel .profile-name { font-size: 1.1rem; font-weight: 700; color: #212529; margin: 0 0 3px; }
    #sbire-profile-panel .profile-meta { font-size: 0.8rem; color: #6c757d; }
    #sbire-profile-panel .profile-actions { display: flex; gap: 6px; flex-wrap: wrap; align-items: flex-start; }
    #sbire-profile-panel h4 { font-size: 0.85rem; font-weight: 600; color: #495057; margin: 16px 0 8px; border-bottom: 1px solid #dee2e6; padding-bottom: 4px; }
    #sbire-profile-panel .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 4px; }
    #sbire-profile-panel .info-item { background: #f8f9fa; border-radius: 6px; padding: 8px 12px; }
    #sbire-profile-panel .info-label { font-size: 0.7rem; color: #6c757d; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 2px; }
    #sbire-profile-panel .info-value { font-size: 0.9rem; font-weight: 600; color: #212529; }
    #sbire-profile-panel .razon-box { background: #fff8e1; border-left: 3px solid #ffc107; padding: 8px 12px; border-radius: 0 6px 6px 0; font-size: 0.82rem; color: #664d03; margin-bottom: 8px; }
    #sbire-profile-panel table { width: 100%; border-collapse: collapse; font-size: 0.82rem; margin-bottom: 4px; }
    #sbire-profile-panel th { background: #f8f9fa; color: #495057; font-weight: 600; text-align: left; padding: 5px 8px; border-bottom: 1px solid #dee2e6; }
    #sbire-profile-panel td { padding: 5px 8px; border-bottom: 1px solid #f1f3f5; }
    #sbire-profile-panel .chart-wrap { background: #f8f9fa; border-radius: 6px; padding: 12px; margin-top: 4px; }
    #sbire-profile-panel canvas { display: block; max-width: 100%; }
  `;
  var styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── MOCK DATA ───────────────────────────────────────────────────── */
  var ESTUDIANTES = [
    {
      id: 1,
      nombre: "Valentina Romero",
      dni: "42101234",
      cohorte: "2025-1C",
      sem: "red",
      razon:
        "Desaprobó Análisis Matemático I (materia crítica) y Física I. 0% aprobadas.",
      entrevista: {
        estado: "realizada",
        fecha: "15/09/2026",
      },
      estado: "activo",
    },
    {
      id: 2,
      nombre: "Lucas Fernández",
      dni: "41987654",
      cohorte: "2025-1C",
      sem: "red",
      razon: "Desaprobó Física I (materia crítica). 25% aprobadas.",
      entrevista: {
        estado: "agendada",
        fecha: "05/11/2026",
      },
      estado: "activo",
    },
    {
      id: 3,
      nombre: "Martina López",
      dni: "43210987",
      cohorte: "2025-1C",
      sem: "yellow",
      razon: "Regularizó Análisis Matemático I y Álgebra. 33% aprobadas.",
      entrevista: {
        estado: "ninguna",
      },
      estado: "activo",
    },
    {
      id: 4,
      nombre: "Ignacio Herrera",
      dni: "40756432",
      cohorte: "2025-1C",
      sem: "yellow",
      razon: "50% aprobadas. Regularizó Física I.",
      entrevista: {
        estado: "realizada",
        fecha: "20/08/2026",
      },
      estado: "activo",
    },
    {
      id: 5,
      nombre: "Sofía Díaz",
      dni: "44321098",
      cohorte: "2025-1C",
      sem: "green",
      razon: "75% aprobadas. Sin materias críticas pendientes.",
      entrevista: {
        estado: "ninguna",
      },
      estado: "activo",
    },
    {
      id: 6,
      nombre: "Tomás Gutiérrez",
      dni: "43567890",
      cohorte: "2025-2C",
      sem: "red",
      razon: "Desaprobó Química General y Análisis Matemático I. 0% aprobadas.",
      entrevista: {
        estado: "ninguna",
      },
      estado: "activo",
    },
    {
      id: 7,
      nombre: "Camila Acosta",
      dni: "42890123",
      cohorte: "2025-2C",
      sem: "green",
      razon: "80% aprobadas.",
      entrevista: {
        estado: "agendada",
        fecha: "10/11/2026",
      },
      estado: "activo",
    },
    {
      id: 8,
      nombre: "Facundo Molina",
      dni: "41234567",
      cohorte: "2025-2C",
      sem: "empty",
      razon: "Sin datos — no respondió la encuesta de 2026-1C.",
      entrevista: {
        estado: "ninguna",
      },
      estado: "nocontesto",
    },
    {
      id: 9,
      nombre: "Julieta Vega",
      dni: "44567890",
      cohorte: "2024-1C",
      sem: "yellow",
      razon: "40% aprobadas. Materias críticas aprobadas.",
      entrevista: {
        estado: "realizada",
        fecha: "10/09/2026",
      },
      estado: "activo",
    },
    {
      id: 10,
      nombre: "Nicolás Peralta",
      dni: "40123456",
      cohorte: "2024-1C",
      sem: "green",
      razon: "90% aprobadas.",
      entrevista: {
        estado: "ninguna",
      },
      estado: "egresado",
    },
    {
      id: 11,
      nombre: "Agustina Sosa",
      dni: "43789012",
      cohorte: "2024-1C",
      sem: "empty",
      razon: "Sin datos — no respondió la encuesta de 2026-1C.",
      entrevista: {
        estado: "ninguna",
      },
      estado: "nocontesto",
    },
    {
      id: 12,
      nombre: "Ramiro Castillo",
      dni: "42456789",
      cohorte: "2024-2C",
      sem: "red",
      razon: "Desaprobó Análisis Matemático II (materia crítica).",
      entrevista: {
        estado: "agendada",
        fecha: "08/11/2026",
      },
      estado: "abandonado",
    },
    {
      id: 13,
      nombre: "Carolina Méndez",
      dni: "44111222",
      cohorte: "2024-2C",
      sem: "green",
      razon: "100% aprobadas. Trabajo final aprobado.",
      entrevista: {
        estado: "ninguna",
      },
      estado: "titulado",
    },
  ];

  var SEM_ORDER = {
    red: 0,
    yellow: 1,
    green: 2,
    nocontesto: 3,
    abandonado: 4,
    egresado: 5,
    titulado: 6,
  };
  var SEM_LABEL = {
    red: "🔴 Rojo",
    yellow: "🟡 Amarillo",
    green: "🟢 Verde",
    empty: "⬜ Sin datos",
  };
  var SEM_CLASS = {
    red: "sem-red",
    yellow: "sem-yellow",
    green: "sem-green",
    empty: "sem-empty",
  };
  var ESTADO_BADGE = {
    activo: '<span class="badge badge-activo">Activo</span>',
    nocontesto: '<span class="badge badge-nocontesto">No contestó</span>',
    abandonado: '<span class="badge badge-abandoned">Abandonó</span>',
    egresado: '<span class="badge badge-egresado">Egresado</span>',
    titulado: '<span class="badge badge-titulado">Titulado</span>',
  };

  var selectedIds = new Set();

  /* ── COHORTES ────────────────────────────────────────────────────── */
  var cohortes = [];
  ESTUDIANTES.forEach(function (e) {
    if (cohortes.indexOf(e.cohorte) === -1) cohortes.push(e.cohorte);
  });
  cohortes.sort();
  var selCohorte = document.getElementById("sbire-filtro-cohorte");
  cohortes.forEach(function (c) {
    var opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    selCohorte.appendChild(opt);
  });

  /* ── FILTRADO ────────────────────────────────────────────────────── */
  function getFiltered() {
    var cohorte = selCohorte.value;
    var q = document
      .getElementById("sbire-busqueda")
      .value.trim()
      .toLowerCase();
    return ESTUDIANTES.filter(function (e) {
      return !cohorte || e.cohorte === cohorte;
    })
      .filter(function (e) {
        return (
          !q ||
          e.nombre.toLowerCase().indexOf(q) !== -1 ||
          e.dni.indexOf(q) !== -1
        );
      })
      .sort(function (a, b) {
        var ORDER = {
          red: 0,
          yellow: 1,
          green: 2,
          nocontesto: 3,
          abandonado: 4,
          egresado: 5,
          titulado: 6,
        };
        var oa = a.estado === "activo" ? ORDER[a.sem] : ORDER[a.estado];
        var ob = b.estado === "activo" ? ORDER[b.sem] : ORDER[b.estado];
        return oa - ob;
      });
  }

  /* ── HELPERS ─────────────────────────────────────────────────────── */
  function entrevistaHtml(e) {
    if (e.entrevista.estado === "realizada")
      return (
        '<span class="entrevista-ok">✔ Realizada <small>' +
        e.entrevista.fecha +
        "</small></span>"
      );
    if (e.entrevista.estado === "agendada")
      return (
        '<span class="entrevista-agenda">📅 ' + e.entrevista.fecha + "</span>"
      );
    return '<span class="entrevista-none">Sin registros</span>';
  }

  function semHtml(e) {
    if (
      e.estado === "egresado" ||
      e.estado === "titulado" ||
      e.estado === "abandonado"
    )
      return ESTADO_BADGE[e.estado];
    if (e.estado === "nocontesto")
      return '<span class="sem-dot sem-empty"></span>Sin datos';
    return (
      '<span class="sem-dot ' +
      SEM_CLASS[e.sem] +
      '"></span>' +
      SEM_LABEL[e.sem].split(" ")[1]
    );
  }

  /* ── RENDER ──────────────────────────────────────────────────────── */
  function render() {
    var tbody = document.getElementById("sbire-tbody");
    tbody.innerHTML = "";
    var lista = getFiltered();

    lista.forEach(function (e) {
      var rowClass =
        e.estado === "abandonado"
          ? "row-abandoned"
          : e.estado === "nocontesto"
            ? "row-nodata"
            : "";
      var tr = document.createElement("tr");
      if (rowClass) tr.className = rowClass;
      tr.dataset.id = e.id;
      tr.innerHTML =
        '<td><input type="checkbox" class="sbire-row-check" data-id="' +
        e.id +
        '" ' +
        (selectedIds.has(e.id) ? "checked" : "") +
        " /></td>" +
        '<td><span class="sbire-nombre" data-id="' +
        e.id +
        '">' +
        e.nombre +
        "</span></td>" +
        "<td>" +
        e.cohorte +
        "</td>" +
        "<td>" +
        semHtml(e) +
        "</td>" +
        "<td>" +
        entrevistaHtml(e) +
        "</td>" +
        "<td>" +
        ESTADO_BADGE[e.estado] +
        "</td>";
      tbody.appendChild(tr);
    });

    document.getElementById("sbire-count-label").textContent =
      lista.length +
      " estudiante" +
      (lista.length !== 1 ? "s" : "") +
      " mostrado" +
      (lista.length !== 1 ? "s" : "");

    attachRowEvents();
    updateBulkBar();
  }

  /* ── EVENTOS FILA ────────────────────────────────────────────────── */
  function attachRowEvents() {
    document.querySelectorAll(".sbire-row-check").forEach(function (chk) {
      chk.addEventListener("change", function () {
        var id = +chk.dataset.id;
        if (chk.checked) selectedIds.add(id);
        else selectedIds.delete(id);
        updateBulkBar();
      });
    });

    document.querySelectorAll("#sbire-tbody tr").forEach(function (tr) {
      tr.addEventListener("click", function (ev) {
        if (ev.target.type === "checkbox") return;
        openProfile(+tr.dataset.id);
      });
    });

    document
      .getElementById("sbire-check-all")
      .addEventListener("change", function () {
        var checked = this.checked;
        getFiltered().forEach(function (e) {
          if (checked) selectedIds.add(e.id);
          else selectedIds.delete(e.id);
        });
        render();
      });
  }

  /* ── BARRA MASIVA ────────────────────────────────────────────────── */
  function updateBulkBar() {
    var count = selectedIds.size;
    document.getElementById("sbire-sel-count").textContent =
      count + " seleccionado" + (count !== 1 ? "s" : "");
    document
      .getElementById("sbire-bulk-bar")
      .classList.toggle("visible", count > 0);
    document.getElementById("sbire-btn-msg").disabled = count === 0;
    document.getElementById("sbire-btn-msg").onclick = function () {
      var nombres = [];
      selectedIds.forEach(function (id) {
        var e = ESTUDIANTES.find(function (x) {
          return x.id === id;
        });
        if (e) nombres.push(e.nombre);
      });
      alert("[Prototipo] Mensaje enviado a: " + nombres.join(", "));
    };
  }

  /* ── GRÁFICO (canvas nativo) ─────────────────────────────────────── */
  function drawChart(canvasId, labels, values, colors, title) {
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var w = canvas.width,
      h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // título
    ctx.fillStyle = "#495057";
    ctx.font = "bold 11px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(title, w / 2, 14);

    var barW = 36,
      gap = 20;
    var total = labels.length;
    var chartW = total * (barW + gap) - gap;
    var startX = (w - chartW) / 2;
    var maxVal = Math.max.apply(null, values.concat([1]));
    var chartH = h - 54;
    var baseY = h - 28;

    values.forEach(function (v, i) {
      var barH = Math.round((v / maxVal) * chartH);
      var x = startX + i * (barW + gap);
      var y = baseY - barH;
      ctx.fillStyle = colors[i];
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(x, y, barW, barH, 4)
        : ctx.rect(x, y, barW, barH);
      ctx.fill();
      // valor
      ctx.fillStyle = "#212529";
      ctx.font = "bold 11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(v, x + barW / 2, y - 4);
      // etiqueta
      ctx.fillStyle = "#6c757d";
      ctx.font = "10px sans-serif";
      ctx.fillText(labels[i], x + barW / 2, baseY + 14);
    });
  }

  /* ── PERFIL ──────────────────────────────────────────────────────── */
  function openProfile(id) {
    var e = ESTUDIANTES.find(function (x) {
      return x.id === id;
    });
    if (!e) return;

    var estadoBtn = "";
    if (e.estado === "activo" || e.estado === "nocontesto") {
      estadoBtn =
        '<button class="sbire-btn sbire-btn-danger sbire-btn-sm sbire-estado-btn" data-id="' +
        e.id +
        '" data-nuevo="abandonado">Marcar abandonado</button>';
    } else {
      estadoBtn =
        '<button class="sbire-btn sbire-btn-secondary sbire-btn-sm sbire-estado-btn" data-id="' +
        e.id +
        '" data-nuevo="activo">Reactivar</button>';
    }

    var panel = document.getElementById("sbire-profile-panel");
    panel.innerHTML =
      '<div class="profile-header">' +
      "<div>" +
      '<p class="profile-name">' +
      e.nombre +
      " " +
      ESTADO_BADGE[e.estado] +
      "</p>" +
      '<span class="profile-meta">Cohorte: ' +
      e.cohorte +
      "</span>" +
      "</div>" +
      '<div class="profile-actions">' +
      '<button class="sbire-btn sbire-btn-primary sbire-btn-sm" id="sbire-profile-msg">✉ Mensaje</button>' +
      estadoBtn +
      '<button class="sbire-btn sbire-btn-secondary sbire-btn-sm" id="sbire-close-profile">✕ Cerrar</button>' +
      "</div>" +
      "</div>" +
      "<h4>Indicadores — 2026-1C</h4>" +
      '<div class="info-grid">' +
      '<div class="info-item"><div class="info-label">Criticidad</div><div class="info-value">' +
      (e.estado === "activo"
        ? SEM_LABEL[e.sem]
        : e.estado === "nocontesto"
          ? "⬜ Sin datos"
          : "—") +
      "</div></div>" +
      '<div class="info-item"><div class="info-label">Entrevista</div><div class="info-value">' +
      (e.entrevista.estado === "ninguna"
        ? "Sin registros"
        : e.entrevista.estado + " · " + e.entrevista.fecha) +
      "</div></div>" +
      "</div>" +
      '<div class="razon-box">⚠ <strong>Razón:</strong> ' +
      e.razon +
      "</div>" +
      "<h4>Historial de materias (mock)</h4>" +
      "<table>" +
      "<thead><tr><th>Cuatrimestre</th><th>Materia</th><th>Estado</th><th>Nota</th></tr></thead>" +
      "<tbody>" +
      "<tr><td>2026-1C</td><td>Análisis Matemático I</td><td>Aprobó</td><td>7</td></tr>" +
      "<tr><td>2026-1C</td><td>Álgebra y Geometría Analítica</td><td>Regularizó</td><td>—</td></tr>" +
      "<tr><td>2026-1C</td><td>Física I</td><td>Desaprobó cursada</td><td>—</td></tr>" +
      "<tr><td>2025-2C</td><td>Introducción a la Ingeniería</td><td>Aprobó</td><td>8</td></tr>" +
      "</tbody>" +
      "</table>" +
      "<h4>Evolución de criticidad (mock)</h4>" +
      '<div class="chart-wrap"><canvas id="sbire-chart-crit" width="380" height="160"></canvas></div>';

    panel.classList.add("visible");
    panel.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    // gráfico: % aprobadas por cuatrimestre
    setTimeout(function () {
      drawChart(
        "sbire-chart-crit",
        ["2025-2C", "2026-1C"],
        [100, 33],
        ["#28a745", "#ffc107"],
        "% materias aprobadas por cuatrimestre",
      );
    }, 50);

    document
      .getElementById("sbire-close-profile")
      .addEventListener("click", closeProfile);
    document
      .getElementById("sbire-profile-msg")
      .addEventListener("click", function () {
        alert("[Prototipo] Abrir mensajería Moodle para " + e.nombre);
      });
    document.querySelectorAll(".sbire-estado-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = ESTUDIANTES.find(function (x) {
          return x.id === +btn.dataset.id;
        });
        if (target) {
          target.estado = btn.dataset.nuevo;
          render();
          openProfile(target.id);
        }
      });
    });
  }

  function closeProfile() {
    document.getElementById("sbire-profile-panel").classList.remove("visible");
  }

  /* ── EVENTOS GLOBALES ────────────────────────────────────────────── */
  document
    .getElementById("sbire-filtro-cohorte")
    .addEventListener("change", function () {
      selectedIds.clear();
      render();
    });
  document
    .getElementById("sbire-busqueda")
    .addEventListener("input", function () {
      selectedIds.clear();
      render();
    });

  render();
}
