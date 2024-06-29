# Whata hell is Load Balancer (LB) ?
    Um load balancer (ou balanceador de carga) é um software que distribui o tráfego de rede ou as requisições de serviço entre vários servidores ou recursos computacionais. Ele atua como um intermediário entre os clientes (como navegadores da web ou aplicativos móveis) e os servidores, garantindo que cada servidor receba uma parcela justa de requisições de entrada, otimizando assim o desempenho, a disponibilidade e a confiabilidade do sistema como um todo.

## Funções Principais do Load Balancer:


### Distribuição de Carga:
    O principal objetivo de um load balancer é distribuir o tráfego de entrada de maneira uniforme e eficiente entre vários servidores backend. Isso evita a sobrecarga de qualquer servidor individual, garantindo que todos os servidores estejam sendo utilizados de maneira eficaz.

### Alta Disponibilidade:
    Um load balancer pode melhorar a disponibilidade de um serviço redirecionando o tráfego para servidores alternativos em caso de falha de um servidor. Isso minimiza o tempo de inatividade percebido pelos usuários finais e ajuda a manter o serviço disponível.

### Escalabilidade: 
    Ao adicionar ou remover servidores do pool de recursos, um load balancer pode ajudar a dimensionar horizontalmente um sistema, permitindo que ele gerencie um aumento ou diminuição na carga de trabalho sem interrupções significativas de serviço.

### Monitoramento e Saúde do Servidor:
    Load balancers geralmente realizam verificações de saúde periódicas em servidores backend para garantir que eles estejam funcionando corretamente. Se um servidor falhar ou ficar indisponível, o load balancer pode automaticamente deixar de direcionar o tráfego para ele até que seja restaurado.

### SSL Termination e Offloading:
    Alguns load balancers podem lidar com a criptografia SSL/TLS, aliviando essa carga dos servidores backend. Isso é chamado de SSL termination. Além disso, eles podem realizar a compressão de dados (por exemplo receber com protocolo http e repassar com o protocolo http/2 proto-buffer grpc ) e outras tarefas de otimização para melhorar o desempenho geral do sistema.


## Diferenca entre Load Balancers e Proxy Reverso:
    Um proxy reverso é um tipo específico de servidor proxy que atua como intermediário entre os clientes externos e os servidores internos. Enquanto um proxy convencional encaminha as requisições dos clientes para os servidores externos, um proxy reverso faz o contrário: recebe requisições dos clientes e as encaminha para os servidores internos.

    Embora não seja tradicionalmente chamado de load balancer, um proxy reverso pode atuar como um, direcionando o tráfego para diferentes servidores com base em regras predefinidas.
    Em resumo, um load balancer desempenha um papel fundamental na construção de sistemas altamente disponíveis, escaláveis e eficientes, garantindo que os recursos de computação sejam utilizados de forma ótima e que os usuários finais recebam uma experiência de serviço consistente e confiável.


### Implemetando um Load Balancer
    Um Load Balancer pode usar vários algoritmos para distribuir o tráfego entre os servidores backend. Cada algoritmo tem suas próprias características e é adequado para diferentes cenários de uso. Aqui estão alguns dos algoritmos mais comuns:


#### Round Robin
    Round Robin é um dos algoritmos de balanceamento de carga mais simples e comuns. Ele distribui as requisições sequencialmente entre os servidores backend.
##### Vantagem:
    Simplicidade e facilidade de implementação.
##### Desvantagem:
    Não leva em consideração a carga atual dos servidores.


#### Least Connections
    O algoritmo de Least Connections envia a requisição ao servidor com o menor número de conexões ativas.
##### Vantagem: 
    Ajuda a distribuir a carga de forma mais equilibrada.
##### Desvantagem:
    Pode ser mais complexo de implementar e manter.


#### Weighted Round Robin
    O algoritmo Weighted Round Robin atribui um peso a cada servidor e distribui as requisições com base nesses pesos. Servidores com maior capacidade de processamento podem ter um peso maior e, portanto, receber mais requisições.
##### Vantagem:
    Permite a consideração da capacidade dos servidores.
##### Desvantagem:
    Requer configuração de pesos adequados.

#### Weighted Least Connections
    Similar ao Least Connections, mas também leva em conta o peso dos servidores. A requisição é enviada ao servidor com o menor número de conexões ativas, ajustado pelo peso do servidor.
##### Vantagem:
    Combina os benefícios do Least Connections e do Weighted Round Robin.
##### Desvantagem:
    Pode ser mais complexo de implementar e configurar.

#### Random
    O algoritmo Random escolhe um servidor backend aleatoriamente para cada requisição.
##### Vantagem:
    Simplicidade de implementação.
##### Desvantagem:
    Pode levar a uma distribuição desigual de carga.



#### Peak Exponentially Weighted Moving Average (PEWMA)
    Direciona as requisições com base em uma média ponderada exponencialmente das latências das requisições.
    Ajusta dinamicamente as probabilidades de roteamento com base nas latências recentes, priorizando servidores com menor latência.
##### Vantagem:
    Reduz a redistribuição quando há mudanças no conjunto de servidores.
##### Desvantagem:
    Mais complexo de implementar.