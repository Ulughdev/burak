console.log("Users frontend javascript file");

$(function() {
    $(".member-status").on("change", function(e) {
        const id = e.target.id,
              memberStatus = $(`#${id}.member-status`).val();

        // TODO: Axios updateChosenUser 
        axios.post("/admin/user/edit", {
            _id: id,
            memberStatus: memberStatus,
        }).then(response => {
            console.log("response: ", response);
            const result = response.data;

            if(result.data){
                $(".member-status").blur();
            }else alert("User Update failed!");
        })
          .catch(err => {
            console.log(err);
            alert("User Update failed!");
        });
    })
})