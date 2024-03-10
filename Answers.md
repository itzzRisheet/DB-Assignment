
# Answers.md


 - ### Explain the relationship between the "Product" and "productCategory" entities from the above diagram.
	 -  As we can show in the diagram there's many to one relationship that shows that many products might belongs to a single catagory
	 - the "catagory_id" column in "Product" collection (Because I'm using mongoDB) referes to the ("_id") of "productCatagory" collection that I defined a mongodb ("_ID") to refer to .
	 - So in that column  ("_id")s of "productCatagory" document will be provided that can be populated or say fetched from the collection "ProductCategory"  OR not depends on the requirement.
	 - The category  ("_id)  field in the "Product" collection serves as a foreign key equivalent pointing to the primary key ("_id") in the "productCategory" collection

- ### How could you ensure that each product in the "Product" table has a valid category assigned to it?
	 - I've provided the validation in the schema to ensure that catagory_id is given by adding an attribute {require : true}
	 - Now that we have provided that categoryId must be provided we can add validation function while creating a product document that checks if the ("_id") provided while creation does exists in "category" collection or not. if it exist then only we can add a product
	 - by providing these two validation we can ensure that product document in the "Product" collection has a valid category assigned to it.
