


<%
//Para verificar la sesion.
  System.out.println(request.getParameter("strAdmCodigo"));
if(request.getSession().getAttribute("strAdmCodigo")==null){
	response.sendRedirect("index.html");
}
%>


<jsp:include page="Header.jsp" flush="true"/>


<div class="row">

  <div class="col-lg-12">
    <div class="ml-3 mr-3 p-4">
      <div class="text-center">
        <h1 class="h4 text-gray-900 mb-4">Mantenimiento Articulo</h1>
      </div>

      <form method="POST" action="clienteMan">
        <div class="form-group row justify-content-center">

            <label class="col-sm-12 col-form-label text-center">El proceso fue existoso</label>

          <div class="col-sm-2 col-md-3">
            <a HREF="mantenimientoArticulo.jsp" class="btn btn-success form-control">Continuar...</a>
          </div>

          <input type="hidden" value="eliminar" name="tipo">
        </div>

      </form>

    </div>
  </div>
</div>


      

<jsp:include page="Footer.jsp"/>
