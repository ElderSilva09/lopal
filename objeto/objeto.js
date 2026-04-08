const pessoa = {
    nome: "Elder",
    sobrenome: "Silva",
    idade: 16,
    time: "São Paulo",
    estado: "São Paulo",
    pais: "Brasil",
    nomeCompleto: function () { return this.nome + " " + this.sobrenome},
    meuObjeto: function () {return this} //retorna o próprio objeto
};

console.log(pessoa.nomeCompleto() + " tem " + pessoa.idade + " anos, é torcedor do " + 
    pessoa.time + ", mora no estado de " + pessoa.estado + ", no país " + pessoa.pais);

const pessoaStringificada = JSON.stringify(pessoa);
console.log(pessoaStringificada);

const pessoaParseada = JSON.parse(pessoaStringificada);

console.log(pessoaParseada.nome + " " + pessoaParseada.sobrenome + " tem " + 
    pessoaParseada.idade + " anos, é torcedor do " + pessoaParseada.time + ", mora no estado de " + 
    pessoaParseada.estado + ", no país " + pessoaParseada.pais);
    