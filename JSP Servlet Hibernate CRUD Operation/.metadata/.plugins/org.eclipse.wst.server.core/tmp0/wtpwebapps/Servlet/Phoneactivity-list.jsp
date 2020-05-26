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
        <table border="1" cellpadding="5">
            <caption><h2>List of Phoneactivity</h2></caption>
            <tr>
                <th>Phone Mac</th>
                <th>IPAddress</th>
                <th>Model</th>
                <th>Sofware</th>
                <th>Acton</th>
            </tr>
            <c:if test="${listUser != null}">
            <c:forEach var="data" items="${listUser}">
                <tr>
                    <td><c:out value="${data.macaddress}" /></td>
                    <td><c:out value="${data.ipaddress}" /></td>
                    <td><c:out value="${data.model}" /></td>
                    <td><c:out value="${data.firmware}" /></td>
                    <td>
                     <a href="edit?id=<c:out value='${data.id}' />">Edit</a>
                     &nbsp;&nbsp;&nbsp;&nbsp;
                     <a href="delete?id=<c:out value='${data.id}' />">Delete</a>                     
                    </td>
                </tr>
            </c:forEach>
            </c:if>
        </table>
    </div> 
</body>
</html>