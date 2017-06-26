# Задания по Typescript

## 1. Летающая машина
**Файл:** interfaces.ts

Добавьте второй интерфейс: `Flyable`. Реализуйте его в классе `Helicopter` (Вертолет), затем напишите класс FlyingCar который реализует оба интерфейса `Drivable` и `Flyable`.

```
interface Flyable { ... }
class Helicopter implements Flyable { ... }
class FlyingCar implements Drivable, Flyable { ... }
```

## 2. Мяч

Создайте веб приложение с использованием TypeScript, классов и интерфейсов.
Приложение должно представлять из себя прямоугольную ограниченную область,
в которой будет летать 1 мяч и отскакивать от границ области.

**Для реализации вы можете использовать:** дивы с абсолютным позиционированием или canvas.

**Для отличников:**
3 мяча.
Так же мячи должны сталкиваться друг с другом и отскакивать в разные стороны.