<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%

    String id = request.getParameter("id_value2");
    Cookie c = new Cookie("idcheck",id);
    response.addCookie(c);

    
    // 데이터베이스 인지(connector 을 사용하는 명령어)
    Class.forName("com.mysql.jdbc.Driver");
    // 데이터베이스 연결
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/stageus","SooMin","dkssud1010@");
    // 쿼리 던지기
    
    String sql="SELECT * FROM userinfo WHERE id=?";
    PreparedStatement pstmt = conn.prepareStatement(sql);
    pstmt.setString(1,id);
    pstmt.executeQuery();
    ResultSet rs=pstmt.executeQuery();


    boolean isidExist=false;
    boolean idlength=false;

    if(rs.next()){
        isidExist=true;
    }
 



%>
   
    
   
    

   
%>

<script>
    console.log("ASDf");
    if (<%=isidExist%>){
        alert("이미 존재하는 아이디입니다.");
        location.href="index.jsp";
      
    }
    if("<%=id%>".length<=4 ||"<%=id%>".length >=13){
            alert("아이디는 5자 이상 12자 이하여야 합니다.")
            location.href="index.jsp";
        }
    if("<%=id%>".length<=4 ||"<%=id%>".length >=13){
        alert("아이디는 5자 이상 12자 이하여야 합니다.");
        location.href="index.jsp";
        
    }
    else{
        alert("생성 가능한 아이디입니다.");
        window.history.back();
        console.log("Asdf");
      
    }
    
   
</script>