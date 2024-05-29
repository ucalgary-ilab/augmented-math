speeds up to five times the wind speed. If we know how fast an iceboat is moving, we can use integration to determine how far it travels. We revisit this question later in the chapter (see Example 5.27).

Determining distance from velocity is just one of many applications of integration. In fact, integrals are used in a wide variety of mechanical and physical applications. In this chapter, we first introduce the theory behind integration and use integrals to calculate areas. From there, we develop the Fundamental Theorem of Calculus, which relates differentiation and integration. We then study some basic integration techniques and briefly examine some applications.

\title{
5.1 | Approximating Areas
}

\section{Learning Objectives}

5.1.1 Use sigma (summation) notation to calculate sums and powers of integers.

5.1.2 Use the sum of rectangular areas to approximate the area under a curve.

5.1.3 Use Riemann sums to approximate area.

Archimedes was fascinated with calculating the areas of various shapes-in other words, the amount of space enclosed by the shape. He used a process that has come to be known as the method of exhaustion, which used smaller and smaller shapes, the areas of which could be calculated exactly, to fill an irregular region and thereby obtain closer and closer approximations to the total area. In this process, an area bounded by curves is filled with rectangles, triangles, and shapes with exact area formulas. These areas are then summed to approximate the area of the curved region.

In this section, we develop techniques to approximate the area between a curve, defined by a function $f(x)$, and the $x$-axis on a closed interval $[a, b]$. Like Archimedes, we first approximate the area under the curve using shapes of known area (namely, rectangles). By using smaller and smaller rectangles, we get closer and closer approximations to the area. Taking a limit allows us to calculate the exact area under the curve.

Let's start by introducing some notation to make the calculations easier. We then consider the case when $f(x)$ is continuous and nonnegative. Later in the chapter, we relax some of these restrictions and develop techniques that apply in more general cases.

\section{Sigma (Summation) Notation}

As mentioned, we will use shapes of known area to approximate the area of an irregular region bounded by curves. This process often requires adding up long strings of numbers. To make it easier to write down these lengthy sums, we look at some new notation here, called sigma notation (also known as summation notation). The Greek capital letter $\Sigma$, sigma, is used to express long sums of values in a compact form. For example, if we want to add all the integers from 1 to 20 without sigma notation, we have to write

$$
1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20 .
$$

We could probably skip writing a couple of terms and write

$$
1+2+3+4+\cdots+19+20
$$

which is better, but still cumbersome. With sigma notation, we write this sum as

$$
\sum_{i=1}^{20} i
$$

which is much more compact.

Typically, sigma notation is presented in the form

$$
\sum_{i=1}^{n} a_{i}
$$

where $a_{i}$ describes the terms to be added, and the $i$ is called the index. Each term is evaluated, then we sum all the values, beginning with the value when $i=1$ and ending with the value when $i=n$. For example, an expression like $\sum_{i=2}^{7} s_{i}$ is