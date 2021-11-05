<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.PreparedStatement"%>
<%@ page import="java.sql.ResultSet"%>
<%

    String idvalue = request.getParameter("id_value");
    String pwvalue = request.getParameter("pw_value");
    // 데이터베이스 인지(connector 을 사용하는 명령어)
    Class.forName("com.mysql.jdbc.Driver");
    // 데이터베이스 연결
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/stageus","SooMin","dkssud1010@");
    // 쿼리 던지기
    String sql="SELECT * FROM userinfo WHERE id=? AND pw=?";
    PreparedStatement pstmt = conn.prepareStatement(sql);
    pstmt.setString(1,idvalue);
    pstmt.setString(2,pwvalue);
    pstmt.executeQuery();
    
    String mynum="SELECT num FROM userinfo WHERE id=? ANd pw=?";
    PreparedStatement pstmt2 = conn.prepareStatement(mynum);
    pstmt2.setString(1,idvalue);
    pstmt2.setString(2,pwvalue);
    pstmt2.executeQuery();
    ResultSet rs2=pstmt2.executeQuery();

    String asdf="SELECT * FROM myinfo WHERE num='+rs2+'";
    PreparedStatement pstmt3 = conn.prepareStatement(asdf);
    ResultSet rs=pstmt.executeQuery();
    ResultSet rs3=pstmt3.executeQuery();
    
    boolean isExist= false;
    if (rs.next()){
        Cookie c= new Cookie("id",idvalue);
        response.addCookie(c);
        isExist=true;  
    }
%>

<script>
    if (<%=isExist%>){
        location.href="main.jsp";
        alert('<%=rs2%>');
    }
    else{
        location.href="index.jsp";
    }
</script>