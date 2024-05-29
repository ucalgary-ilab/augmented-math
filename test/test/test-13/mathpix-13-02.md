1.1. Sets
29
(4)
$$
\begin{aligned}
A \cap(B \cap C) & =\{2,3,5\} \cap\{2\} \\
& =\{2\}
\end{aligned}
$$
Note Given any sets $A, B$ and $C$, we always have
$$
(A \cap B) \cap C=A \cap(B \cap C) \quad \text { and } \quad(A \cup B) \cup C=A \cup(B \cup C)
$$
Thus we may write $A \cap B \cap C$ and $A \cup B \cup C$ without ambiguity. We say that set intersection and set union are associative.

Definition Let $A$ and $B$ be sets. The relative complement of $B$ in $A$, denoted by $A \backslash B$ or $A-B$ (read " $A$ setminus (or minus) $B$ "), is the set whose elements are those belonging to $A$ but not belonging to $B$, that is,
$$
A \backslash B=\{x \in A: x \notin B\}
$$
Example Let $A=\{a, b, c\}$ and $B=\{c, d, e\}$. Then we have $A \backslash B=\{a, b\}$.
For each problem, we will consider a set that is "large" enough, containing all objects under consideration. Such a set is called a universal set and is usually denoted by $U$. In this case, all sets under consideration are subsets of $U$ and they can be written in the form $\{x \in U: P(x)\}$.

Example In considering addition and subtraction of whole numbers $(0,1,2,3,4, \ldots)$, we may use $\mathbb{Z}$ (the set of all integers) as a universal set.
(1) The set of all positive even numbers can be written as $\{x \in \mathbb{Z}: x>0$ and $x$ is divisible by 2$\}$.
(2) The set of all prime numbers can be written as $\{x \in \mathbb{Z}: x>0$ and $x$ has exactly two divisors $\}$.
Definition Let $U$ be a universal set and let $B$ be a subset of $U$. Then the set $U \backslash B$ is called the complement of $B$ (in $U$ ) and is denoted by $B^{\prime}$ (or $B^{c}$ ).

Example Let $U=\mathbb{Z}_{+}$, the set of all positive integers. Let $B$ be the set of all positive even numbers. Then $B^{\prime}$ is the set of all positive odd numbers.
Example Let $U=\{1,2,3, \ldots, 12\}$ and let
$$
\begin{aligned}
A & =\{x \in U: x \text { is a prime number }\} \\
B & =\{x \in U: x \text { is an even number }\} \\
C & =\{x \in U: x \text { is divisible by } 3\} .
\end{aligned}
$$
Find the following sets.
(1) $A \cup B$
(2) $A \cap C$
(3) $B \cap C$
(4) $(A \cup B) \cap C$
(5) $(A \cap C) \cup(B \cap C)$