grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./todo \
--grpc_out=grpc_js:./todo \
--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
-I ./todo \
./todo/*.proto


protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./todo \
-I ./todo \
./todo/*.proto