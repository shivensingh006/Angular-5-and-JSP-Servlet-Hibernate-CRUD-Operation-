<jsp:include page='header.jsp' />
 <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> 
<body>
 <center>
  <h1>Phoneactivity</h1>
        <h2>
         <a href="new">Add Phoneactivity</a>
         &nbsp;&nbsp;&nbsp;
         <a href="list">List All Phoneactivity</a>
         
        </h2>
 </center>
    <div align="center">
  <c:if test="${phoneactivity != null}">
   <form action="update" method="post">
        </c:if>
        <c:if test="${phoneactivity == null}">
   <form action="insert" method="post">
        </c:if>
        <table border="1" cellpadding="5">
            <caption>
             <h2>
              <c:if test="${phoneactivity != null}">
               Edit phoneactivity
              </c:if>
              <c:if test="${phoneactivity == null}">
               Add New phoneactivity
              </c:if>
             </h2>
            </caption>
          <c:if test="${phoneactivity != null}">
           <input type="hidden" name="id" value="<c:out value='${phoneactivity.id}' />" />
          </c:if> 
          <tr>
                <th>Phone Mac</th>
                <td>
                 <input type="text" name="MacAddress" size="45"
                   value="<c:out value='${phoneactivity.macaddress}' />"
                  />
                </td>
            </tr>
                       
            <tr>
                <th>IPAddress</th>
                <td>
                 <input type="text" name="IPAddress" size="45"
                   value="<c:out value='${phoneactivity.ipaddress}' />"
                  />
                </td>
            </tr>
            
            <tr>
                <th>Model: </th>
                <td>
                 <input type="text" name="Model" size="45"
                   value="<c:out value='${phoneactivity.model}' />"
                 />
                </td>
            </tr>
            <tr>
           
                <th>Software: </th>
                <td>
                 <input type="text" name="Firmware" size="15"
                   value="<c:out value='${phoneactivity.firmware}' />"   
                 />
                </td>
            </tr>
            <tr>
             <td colspan="2" align="center">
              <input type="submit" value="Save" />
             </td>
            </tr>
        </table>
        </form>
    </div> 
</body>
</html>