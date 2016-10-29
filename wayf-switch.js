console.log(document.querySelector("#userIdPSelection").value);
if (document.querySelector("#userIdPSelection").value.match(".*bfh\.ch.*")) {
    document.querySelector("#IdPList").submit();
}
