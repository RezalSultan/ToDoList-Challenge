const button = document.querySelector("#form_input button");

let id = null;
const nama_user = document.getElementById("nama");
const email_user = document.getElementById("email");
const no_hp_user = document.getElementById("no_hp");
const jk_user = document.getElementById("jk");

const list = document.getElementById("list");

data = [];

const editData = function(index){
   nama_user.value = data[index].nama;
   email_user.value = data[index].email;
   no_hp_user.value = data[index].no_hp;
   jk_user.value = data[index].jk;
   id = index;
}

const deleteData = function(index){
   data.splice(index,1);
   tampilData(data, list);
}

const tampilData = function(data, element){
   element.innerHTML = "";
   i = 0;
   data.forEach(function(item) {
      element.innerHTML += `
      <li>
         <p class="data">Nama</p> <p class="colon">:</p> <p class="value">${item.nama}</p>
      </li>
      <li>
         <p class="data">Email</p> <p class="colon">:</p> <p class="value">${item.email}</p>
      </li>
      <li>
         <p class="data">No Hp</p> <p class="colon">:</p> <p class="value">${item.no_hp}</p>
      </li>
      <li>
         <p class="data">Jenis Kelamin</p> <p class="colon">:</p> <p class="value">${item.jk}</p>
      </li>
      <div class="button_wrapper">
         <button class="delete" type="button" onclick="deleteData(${i})">Delete</button>
         <button class="edit" type="button" onclick="editData(${i})">Edit</button>
      </div>
      `
      i++
   });
}

const clear = function(){
   nama_user.value = null;
   email_user.value = null;
   no_hp_user.value = null;
   jk_user.value = null;
   id = null;
}


button.addEventListener("click", function (){
   const semua_data = document.getElementsByClassName("bg_data")[0];
   semua_data.style.display = "flex";
   if ( id == null){
      data.push({
         'nama': nama_user.value,
         'email': email_user.value,
         'no_hp': no_hp_user.value,
         'jk': jk_user.value
      });
   }else {
      data[id].nama = nama_user.value
      data[id].email = email_user.value
      data[id].no_hp = no_hp_user.value
      data[id].jk = jk_user.value
   }
   clear()

   tampilData(data, list);

});

const close = document.getElementsByClassName("close")[0];
close.addEventListener("click", function(e){
   e.target.parentElement.style.display = "none";
});

