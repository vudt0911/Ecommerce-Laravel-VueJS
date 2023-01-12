webpackJsonp([9],{53:function(t,e,a){var s=a(0)(a(96),a(97),!1,null,null,null);t.exports=s.exports},96:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{err:3,product_id:0}},created:function(){this.subcategories.length<1?this.refreshSubcategories():this.refreshProducts()},methods:{deleteProduct:function(t){var e=this;util.hideModal("#deleteProductModal"),util.notify("Deleting product...","loading"),axios.delete(data.getBaseURL()+"api/v1/product/"+t).then(function(t){$.notifyClose(),util.showResult(t)&&e.refreshProducts()}).catch(function(t){util.showResult(t)})},refreshProducts:function(){var t=this,e=data.getBaseURL();util.notify("Refreshing Products","loading"),axios.get(e+"api/v1/product?id="+this.category_id).then(function(e){$.notifyClose(),t.err=3,data.setProducts(e.data),e.data.length<1&&t.$nextTick(function(){$.notifyClose();var t=this.transformData(this.products);this.initDatatable(t)})}).catch(function(e){t.err>0?(t.err--,t.refreshProducts()):util.showResult(e)})},refreshSubcategories:function(){var t=this;util.notify("Refreshing Products","loading"),axios.get(data.getBaseURL()+"api/v1/subcategory").then(function(e){$.notifyClose(),data.setSubcategories(e.data),t.err=3,e.data.length<1?t.$nextTick(function(){$.notifyClose();var t=this.transformData(this.products);this.initDatatable(t)}):t.refreshProducts()}).catch(function(e){t.err>0?(t.err--,t.refreshSubcategories()):util.showResult(e)})},transformData:function(t){var e=[];for(var a in t){var s=[],i=data.getStorageURL()+t[a].product_image,r=t[a].id;s.push('<img src="'+i+'" class="thumbnail" height="50px" width="50px" />'),s.push(util.minify(t[a].product_name,15)),s.push(util.minify(t[a].product_description,15)),s.push(t[a].product_price),s.push(t[a].product_quantity),s.push('<button class="btn btn-link edit" id="'+r+'">\t\t\t\t\t\t \t<span class="fa fa-edit"></span>\t\t\t\t\t\t  </button>'),s.push('<button class="btn btn-link delete" id="'+r+'">\t\t\t\t\t\t\t<span class="fa fa-trash"></span>\t\t\t\t\t\t  </button>'),e.push(s)}return e},initDatatable:function(t){var e=this;$("#productsTable").DataTable({destroy:!0,aaData:t,paging:!0,ordering:!1,searching:!1,info:!1,autoWidth:!1,dom:"Bfrtip",buttons:[{text:'<span class="fa fa-plus"></span> Add Products',action:function(t,a,s,i){e.$router.push("/products/"+e.category_id+"/"+e.subcategory_id+"/add")},className:"btn btn-success"},{text:'<span class="fa fa-refresh"></span> Refresh',className:"btn btn-primary",action:function(t,a,s,i,r){e.refreshSubcategories()}}]}),this.addListener()},addListener:function(){var t=this;$("#productsTable_next").click(function(){t.addListener()}),$(".edit").click(function(){var e=$(this).attr("id");data.setProduct(t.getProduct(e)),t.$router.push("/products/"+t.category_id+"/"+t.subcategory_id+"/edit/"+e)}),$(".delete").click(function(){t.product_id=$(this).attr("id"),util.showModal("#deleteProductModal")})},getProduct:function(t){for(var e in this.products)if(this.products[e].id==t)return this.products[e];return{}},minify:function(t){return util.minify(util.unescapeHTML(t),20)}},watch:{category_id:function(t){this.refreshProducts()},products:function(t){var e=this.transformData(t);this.initDatatable(e)}},computed:{subcategory_id:function(){return this.$route.params.subcategory_id},category_id:function(){return this.$route.params.category_id},subcategories:function(){var t=data.subcategories,e=[];for(var a in t)t[a].category_id==this.category_id&&e.push(t[a]);return e},subcategory_name:function(){if(0==this.subcategory_id)return"All Subcategories";for(var t in this.subcategories)if(this.subcategories[t].id==this.subcategory_id)return this.subcategories[t].subcategory_name},products:function(){var t=data.products,e=[];for(var a in t)0!=this.subcategory_id&&t[a].subcategory_id!=this.subcategory_id||e.push(t[a]);return e}}}},97:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"panel-group"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel panel-heading"},[a("h4",{staticClass:"panel-title",attrs:{"data-toggle":"collapse",href:"#collapse1"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.minify(t.subcategory_name))+"\n\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"panel-collapse collapse",attrs:{id:"collapse1"}},[a("ul",{staticClass:"list-group"},[a("router-link",{staticClass:"list-group-item",attrs:{tag:"li",to:{params:{subcategory_id:0}},"active-class":"active"}},[t._v("All Subcategories")]),t._v(" "),t._l(t.subcategories,function(e){return a("li",{staticClass:"list-group-item",class:{active:e.id==t.subcategory_id},on:{click:function(a){return t.$router.push({params:{subcategory_id:e.id}})}}},[a("router-link",{attrs:{tag:"span",to:{params:{subcategory_id:e.id}}}},[t._v(t._s(t.minify(e.subcategory_name))+"\n\t\t\t\t\t\t\t")])],1)})],2)])])])]),t._v(" "),t._m(0),t._v(" "),a("modal",{attrs:{id:"deleteProductModal"}},[a("modal-header",[t._v("Delete Product")]),t._v(" "),a("modal-body",[a("p",[t._v("Are you sure to delete product?")]),t._v(" "),a("p",[a("b",[t._v("Warning : ")]),t._v("deleting product can't be undone")])]),t._v(" "),a("modal-footer",[a("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.deleteProduct(t.product_id)}}},[t._v("Delete")]),t._v(" "),a("button",{staticClass:"btn btn-default",attrs:{"data-dismiss":"modal"}},[t._v("Cancel")])])],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-body table-responsive"},[a("table",{staticClass:"table table-hover",attrs:{id:"productsTable"}},[a("thead",[a("tr",[a("th",{attrs:{width:"50px"}}),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Price")]),t._v(" "),a("th",[t._v("Quantity")]),t._v(" "),a("th",[t._v("Edit")]),t._v(" "),a("th",[t._v("Delete")])])])])])])])}]}}});