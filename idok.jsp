<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>


<head>
    <script>
        var ischecked=false;
        function another(){
            ischecked=true;
            document.asdf.action="signup_id.jsp";
            document.asdf.submit();
        }
        function signup(){
            var pwname=document.getElementsByName("pw_value");
            var pwname2=document.getElementsByName("pw_check");
            

            if(ischecked==false){
                alert("아이디 검사를 하지 않으셨습니다");
            }

            if(pwname[1].value!=pwname2[0].value){
                alert("비밀번호가 다릅니다.");
                console.log(pwname[1].value);
                console.log(pwname2[0].value);   
            }
            
            
            
        }
    </script>
</head>
<body>
    <%
            Cookie[] cookies = request.getCookies();
            if (cookies!=null){
                for (Cookie c:cookies){
                    String myid=c.getValue();
                }
            }
        %>
    <form action="auth.jsp" method="post">
        <span>아이디&nbsp;&nbsp;&nbsp;</span>
        <input type="text" name="id_value">
        <br>
        <span>비밀번호</span>
        <input type="password" name="pw_value">
        <br>
        <input type="submit" value="로그인">
    </form>
    <form name="asdf" method="post">
         
        <br>
        <span>아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="text" name="id_value2" >
        <span> 사용 가능한 아이디입니다. </span>
        <br>
        <span>비밀번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <input type="password" name="pw_value">
        <br>
        <span>비밀번호 확인</span>
        <input type="password" name="pw_check">
        <br>
        <input type="button" value="회원가입" onclick="signup()">
       

</body>


</html>