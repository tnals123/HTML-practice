<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.PreparedStatement"%>
<%

    String idvalue = request.getParameter("id_value2");
    String pwvalue = request.getParameter("pw_value");

    String name2 = request.getParameter("name");
    String age2 = request.getParameter("age");
    String phonenumber2 = request.getParameter("phonenumber");
    String email2 = request.getParameter("email");
    String address2 = request.getParameter("address");

    // 데이터베이스 인지(connector 을 사용하는 명령어)
    Class.forName("com.mysql.jdbc.Driver");
    // 데이터베이스 연결
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/stageus","SooMin","dkssud1010@");
    // 쿼리 던지기
    String sql="INSERT INTO userinfo(id,pw) VALUES(?,?)";
    String signmyinfo="INSERT INTO myinfo(name,age,phonenumber,email,address) VALUES(?,?,?,?,?)";
    PreparedStatement pstmt = conn.prepareStatement(sql);
    PreparedStatement pstmt2 = conn.prepareStatement(signmyinfo);
    pstmt.setString(1,idvalue);
    pstmt.setString(2,pwvalue);
    pstmt2.setString(1,name2);
    pstmt2.setString(2,age2);
    pstmt2.setString(3,phonenumber2);
    pstmt2.setString(4,email2);
    pstmt2.setString(5,address2);
    pstmt2.executeUpdate();
    pstmt.executeUpdate();
    
    

   
%>

<script>
    alert("회원가입 성공!");
    location.href="index.jsp";
</script>