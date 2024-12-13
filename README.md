tipos de mocks:

Stub: Duble de teste. É uma função mockada e que retorna um valor marretado
sem se importar com as suas implementações, apenas com o seu retorno.

Boas práticas: 
Ao criar versões mockadas é importante retornar true, ou seja, sempre seu
retorno deverá ser verdadeiro. Porém para que não ocorra problemas ao rodar
os outros testes devemos modificar o retorno apenas onde precisamos validar