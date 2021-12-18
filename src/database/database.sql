CREATE TABLE "tests" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"category" varchar(255) NOT NULL,
	"subject" varchar(255) NOT NULL,
	"teacher" varchar(255) NOT NULL,
	"url" TEXT NOT NULL,
	CONSTRAINT "tests_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "teachers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"subject" varchar(255) NOT NULL,
	"is_first" BOOLEAN NOT NULL,
	CONSTRAINT "teachers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"period" varchar(255) NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Física I',
	'1 Período'
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Física II',
	'2 Período'
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Física III',
	'3 Período'
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Física IV',
	'4 Período'
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Cálculo I',
	'1 Período'
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Cálculo II',
	'2 Período'
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Cálculo III',
	'3 Período'
);

INSERT INTO "subjects" (
	"name",
	"period"
)	VALUES (
	'Cálculo IV',
	'4 Período'
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'José Brás',
	'Física I',
	true
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'José Brás',
	'Física III',
	false
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'Júlio Sambrano',
	'Cálculo II',
	true
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'Alexys Alfonso',
	'Cálculo I',
	true
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'Alexys Alfonso',
	'Cálculo III',
	false
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'Júlio Sambrano',
	'Cálculo IV',
	false
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'Rosa',
	'Física II',
	true
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'Humberto',
	'Física IV',
	true
);

INSERT INTO "teachers" (
	"name",
	"subject",
	"is_first"
)	VALUES (
	'Andréa Carla',
	'Cálculo II',
	true
);







