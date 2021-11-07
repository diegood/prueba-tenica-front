# Hiberus Technnical test

## setup del proyecto
ss necesarios contar con node y npm instalado
 - version recomendada  node v14.15.4 npm 6.14.10
```
npm install
```

### ejecutar el proyecto en modo development
```
npm start
```

## Explicacion
    se siguió la documentación cumplimentando las features solicitadas obligatorias alguna de las opcionales y agregando alguna feature opcional, el proyecto lo desarrollé en vue3 con TS utilizando librerías como vue-router4, vux-4, axios para la parte de css utilizo stylus, La elección de colores fue totalmente aleatoria y me decante por un color cercano al rosa solo para hacer algo distinto a lo que usualmente hago.
    - cosas que me resultaron complejas:
       - realmente fue acostumbrarme a la sintaxis y estructura de vue3 ya que no lo había usado nunca y hacía años que no usaba typescript por lo que lo que sumó una complejidad a la hora de recordar mucho de su sintaxis.
       - me costó cuadrar la pantalla de logout para que tuviera un sentido usable
    el sistema no es realmente muy complejo y la cantidad de componentes en pantalla son pocos por lo que la componentización la hice mínima en las cosas que realmente creí que valga la pena volver componentes.
    - el tiempo destinado fue de 4 horas el sábado 2 horas y el domingo otras horas más. lamento no poder dedicarle más tiempo.
    - decisiones:
        * intente hacer un proyecto en tecnologías en las cuales no este muy familiarizado para sacarle provecho a este test y hacer algo distinto, pensé en apostar por DDD para esto, sin embargo me di cuenta que iba terminar haciendo sobre ingeniería  
        Evite usar cosas como bootstrap o material, creo que el proyecto no lo requería.
        * Dentro de los requerimientos se solicitaba hacer un sistema de cache, pensé en agregar services worker, luego me di cuenta que no tendría sentido cachear nada a ese nivel dado que no se sirve de imágenes, por lo que entendi por cache fue guardar en el localstorage determinados datos y hacer la menor cantidad de llamadas a api posible utilizando y manipulado el estado de la app.




