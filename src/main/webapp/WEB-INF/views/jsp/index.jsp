<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en" ng-app="gluabtekapp">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="_csrf" content="${_csrf.token}"/>
  <meta name="_csrf_header" content="${_csrf.headerName}"/>
  <title>GluabApp</title>

	
	<link href="<c:url value='/static/css/bootstrap.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/font-awesome.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/animate.min.css' />" rel="stylesheet" />
    <link href="<c:url value='/static/css/prettyPhoto.css' />" rel="stylesheet" />
    <link href="<c:url value='/static/css/style.css' />" rel="stylesheet" />
	<link href="<c:url value='/static/css/responsive.css' />" rel="stylesheet" />

</head>
<body>
<div></div>

<main>

  <page-header></page-header>

      <div ui-view></div>
  
  <page-footer></page-footer>
  
</main>

<script src="<c:url value='/static/lib/angular.js' />"></script>
<script src="<c:url value='/static/lib/angular-ui-router.js' />"></script>

<script src="<c:url value='/static/lib/jquery.js' />"></script>
<script src="<c:url value='/static/lib/bootstrap.min.js' />"></script>
<script src="<c:url value='/static/lib/jquery.prettyPhoto.js' />"></script>
<script src="<c:url value='/static/lib/jquery.isotope.min.js' />"></script>
<%-- <script src="<c:url value='/static/lib/wow.min.js' />"></script> --%>
<%-- <script src="<c:url value='/static/lib/main.js' />"></script> --%>

<script src="<c:url value='/static/lib/app.js' />"></script>
<script src="<c:url value='/static/lib/pages.module.js' />"></script>
<script src="<c:url value='/static/app/controller/LookupCtrl.js' />"></script>

<script src="<c:url value='/static/app/directives/pageHeader.directive.js' />"></script>
<script src="<c:url value='/static/app/directives/pageFooter.directive.js' />"></script>
</body>
</html>
