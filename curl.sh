start=$(date +%s)

for ((i=1;i<=20;i++)); do  
  grpcurl -plaintext -d '{"id": "hello my friend"}'  localhost:50010 todo.ToDoService.ListToDo 
  grpcurl -plaintext -d '{"id": "hello my friend"}'  localhost:50010 todo.ToDoService.ListToDo 
  grpcurl -plaintext -d '{"id": "hello my friend"}'  localhost:50010 todo.ToDoService.ListToDo 
  grpcurl -plaintext -d '{"id": "hello my friend"}'  localhost:50010 todo.ToDoService.ListToDo &
done
wait

end=$(date +%s)

echo "Elapsed Time: $(($end-$start)) seconds"

grpcurl -plaintext -d '{"id": "end"}'  localhost:50010 todo.ToDoService.ListToDo 
